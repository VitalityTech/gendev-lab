const [tasks, setTasks] = useState(initialTasks);
const [searchQuery, setSearchQuery] = useState("");
const [sortByPriority, setSortByPriority] = useState("default");

const handleAddTask = (title, priority) => {
  const newTask = {
    id: Date.now(),
    title: title || "Нове завдання",
    description: "Створено через форму",
    status: "todo",
    priority: priority || "normal",
    date: "Сьогодні",
  };

  setTasks((prevTasks) => [...prevTasks, newTask]);
};

const getTasksByStatus = (status) => {
  const searchedTasks = memoizedSearch(tasks, searchQuery);
  let filteredTasks = searchedTasks.filter((t) => t.status === status);

  if (sortByPriority === "default") return filteredTasks;

  const pq = new PriorityQueue();
  const weights = { urgent: 4, high: 3, normal: 2, low: 1 };

  filteredTasks.forEach((task) => {
    let w = weights[task.priority] || 0;
    if (sortByPriority === "low-high") w = -w;
    pq.enqueue(task, w);
  });

  let sorted = [];
  while (!pq.isEmpty()) sorted.push(pq.dequeue());
  return sorted;
};
