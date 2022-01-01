import Task from './Task'
import PropTypes from 'prop-types'

const Tasks = ({tasks, onDelete, onToggle}) => {

    return (
        <div >
            {tasks.map((task) => (
                <Task key={task.id} task={task} 
                onDelete={onDelete} onToggle={onToggle}
                />
            ))}
        </div>
    )
}

Tasks.propTypes = {
    onToggle: PropTypes.func.isRequired,
}

export default Tasks