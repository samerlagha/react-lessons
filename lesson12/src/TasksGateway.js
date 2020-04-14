
 const baseUrl ='https://crudcrud.com/api/6c3392cb680d466e954b329629573c3a/tasks';

 //const baseUrl = 'https://5e95c6135b19f10016b5de92.mockapi.io/api/v1/tasks';

 export const fetchTasksList = () => {
  return fetch(baseUrl)
      .then(response => {
          if (response.ok) {
              return response.json();
          }
      })
      .then(tasksList => tasksList
          .map(({ _id, ...rest }) => ({ id: _id, ...rest })))
}

export const createTask = taskData => {
  return fetch(baseUrl, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(taskData),
  })
      .then(response => {
          if (!response.ok) {
              throw new Error('Faaaailed!!!!');
          }
      })
};

export const updateTask = (taskId, taskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(taskData),
  })
      .then(response => {
          if (!response.ok) {
              throw new Error('Faaaailed to update!!!!');
          }
      })
};

export const deleteTask = taskId => {
  return fetch(`${baseUrl}/${taskId}`, {
      method: 'DELETE'
  })
      .then(response => {
          if (!response.ok) {
              throw new Error('Faaaailed to delete!!!!');
          }
      })
}