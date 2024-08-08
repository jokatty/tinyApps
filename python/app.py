from flask import Flask, jsonify

app = Flask(__name__)


class ToDo:
    def __init__(self, task_id, task):
        self.task_id = task_id
        self.task = task

    def to_dict(self):
        return {'id': self.task_id, 'task': self.task}


tasks = []
task1 = ToDo(1, 'read')
task2 = ToDo(2, 'code')
tasks.append(task1)
tasks.append(task2)


@app.route('/')
def index():
    return "hi"


@app.route('/todos')
def get_todos():
    return jsonify([{"id": task.task_id, "item": task.task} for task in tasks])


if __name__ == "__main__":
    app.run(debug=True)

