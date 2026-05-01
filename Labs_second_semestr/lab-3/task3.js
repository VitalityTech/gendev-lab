const memoize = (fn) => {
  const cache = new Map();
  const MAX_SIZE = 50;

  return (tasks, query) => {
    const key = query.toLowerCase().trim();
    if (!key) return fn(tasks, query);

    if (cache.has(key)) {
      const result = cache.get(key);
      cache.delete(key);
      cache.set(key, result);
      return result;
    }

    const result = fn(tasks, query);

    if (cache.size >= MAX_SIZE) {
      cache.delete(cache.keys().next().value);
    }

    cache.set(key, result);
    return result;
  };
};

const expensiveSearch = (tasks, query) => {
  return tasks.filter(task => 
    task.title.toLowerCase().includes(query.toLowerCase()) ||
    task.description.toLowerCase().includes(query.toLowerCase())
  );
};

const memoizedSearch = memoize(expensiveSearch);