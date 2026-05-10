const asyncFilter = (arr, predicate, signal, callback) => {
  if (signal?.aborted) return callback(new Error("Aborted"), null);

  setTimeout(() => {
    if (signal?.aborted) return callback(new Error("Aborted"), null);
    try {
      callback(null, arr.filter(predicate));
    } catch (err) {
      callback(err, null);
    }
  }, 300);
};

const asyncFilterPromise = (arr, predicate, signal) => {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) return reject(new Error("Aborted"));

    const abortHandler = () => reject(new Error("Aborted"));
    if (signal) signal.addEventListener("abort", abortHandler);

    setTimeout(() => {
      if (signal) signal.removeEventListener("abort", abortHandler);
      if (signal?.aborted) return reject(new Error("Aborted"));

      try {
        resolve(arr.filter(predicate));
      } catch (err) {
        reject(err);
      }
    }, 300);
  });
};

const mockTasks = [
  { id: 1, title: "Learn React", status: "done" },
  { id: 2, title: "Do Lab 5", status: "todo" },
  { id: 3, title: "Fix UI", status: "todo" },
];

const isTodo = (task) => task.status === "todo";

async function runDemos() {
  asyncFilter(mockTasks, isTodo, null, (err, res) => {
    if (err) console.error(err.message);
    else console.log(res);
  });

  try {
    const res = await asyncFilterPromise(mockTasks, isTodo, null);
    console.log(res);
  } catch (err) {
    console.error(err.message);
  }

  try {
    const controller = new AbortController();
    const promise = asyncFilterPromise(mockTasks, isTodo, controller.signal);

    controller.abort();

    await promise;
  } catch (err) {
    console.log(err.message);
  }
}

runDemos();
