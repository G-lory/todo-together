class Task {
  constructor(title, point, level, content) {
    this.title = title;
    this.point = point;
    this.level = level;
    this.content = content;
  }

  toString() {
    return `标题：${this.title}; 成就点：${this.point}; 优先级：${this.level}; 内容：${this.content};`;
  }
}

console.log(new Task(1,2,3,4));