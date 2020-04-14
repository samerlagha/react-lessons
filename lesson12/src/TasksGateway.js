
// const baseUrl ='https://crudcrud.com/api/6c3392cb680d466e954b329629573c3a/tasks';

 const baseUrl = 'https://5e95c6135b19f10016b5de92.mockapi.io/api/v1/tasks';


export const fetchTasksList = () => {
  return fetch(baseUrl)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .then(tasksList =>
      tasksList.map(({ _id, ...elem }) => ({ id: _id, ...elem })));
};

export const createTask = newTask => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': "application/json; utc-8"
    },
    body: JSON.stringify(newTask),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to create task');
      }
    });
};

export const onChangeTask = (updatedTask, id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': "application/json; utc-8"
    },
    body: JSON.stringify(updatedTask),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to create task');
      }
    });
}

export const onDeleteTask = id => {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE"
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to create task');
      }
    });
};