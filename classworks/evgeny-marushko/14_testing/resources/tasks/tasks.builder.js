class TasksBuilder {
  constructor ()  {
    this.data = {}
  }

  title (title) {
    this.data.title = title;
    return this;
  }

  description (description) {
    this.data.description = description;
    return this;
  }

  build () {
    return this.data
  }
}

module.exports = TasksBuilder;
