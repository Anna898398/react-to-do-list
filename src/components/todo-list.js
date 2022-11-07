import Table from 'react-bootstrap/Table';
import TodoListItem from './todo-list-item.js';
import './todo-list-css.css';

export default function TodoList() {

    const list = [
        {
            "num": 1,
            "name": "Сделать диплом",
            "date": "11:00:11",
            "description": "Подготовит дипломную работу",
            "tags": ["#учеба #frontend"],
            "priority": "Высокий"
        },

        {
            "num": 2,
            "name": "Приготовить обед",
            "date": "12:00:11",
            "description": "Описание обеда",
            "tags": ["#еда #рецепты #суп"],
            "priority": "Средний"
        },
        
    ];

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
                    </tr>
                </thead>

                <tbody>
                {list.map((item, index) => (
                    <TodoListItem 
                        item = {item}
                        index = {index + 1}
                        key = {index}>                        
                    </TodoListItem>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}