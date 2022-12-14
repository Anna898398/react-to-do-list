/* eslint-disable react/prop-types */
import Table from 'react-bootstrap/Table';
import TodoListItem from './todo-list-item.js';
import './todo-list-css.css';

export default function TodoList(props) {   

    return (
        <div>
            <Table striped bordered hover>

                <thead>
                    <tr>
                        <th className='num'>#</th>
                        <th>Название дела</th>
                        <th>Дата/время исполнения</th>
                        <th>Описание дела</th>
                        <th>Теги</th>
                        <th>Приоритет дела</th>
                        <th>Статус</th>
                        <th className='сom'>Завершить</th>
                        <th className='del'>Удалить</th>
                    </tr>
                </thead>

                <tbody>
                    {props.list.map((item, index) => (
                        <TodoListItem
                            item = {item}
                            index = {index + 1}
                            key = {index}
                            removeItem={props.removeItem}
                            closeTask={props.closeTask}
                        >                        
                        </TodoListItem>                        
                    ))}
                </tbody>
            </Table>
        </div>
    );
}