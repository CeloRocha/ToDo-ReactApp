import React, { useContext } from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskContextProvider, { TaskContext } from './TasksContextProvider';
import Task from '../components/Task';

export const ServeContext = () => {
    return render(
        <TaskContextProvider>
            <CustomRender />
        </TaskContextProvider>,
    );
};

export const mockTask = {
    title: 'Task title',
    description: 'Task description',
    complete: false,
};
const keys = ['aa', 'bb', 'cc', 'dd', 'ee'];

export const CustomRender = () => {
    const { tasks, taskFunctions } = useContext(TaskContext);
    return (
        <>
            {tasks &&
                tasks.map((task, id) => {
                    return (
                        <div key={keys[id]}>
                            <Task {...task} id={id} />;
                            {task.complete && <p>Complete state</p>}
                        </div>
                    );
                })}
            <button onClick={() => taskFunctions.addTask(mockTask)}>
                Add Task
            </button>
            <button
                onClick={() =>
                    taskFunctions.editTask(
                        0,
                        'New Task Title',
                        'New Task Description',
                        false,
                    )
                }
            >
                Edit Task
            </button>
            <button onClick={() => taskFunctions.completeTask(0)}>
                Complete Task
            </button>
            <button onClick={() => taskFunctions.removeTask(0)}>
                Remove Task
            </button>
        </>
    );
};
