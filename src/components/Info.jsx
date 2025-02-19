import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export default function Info({ undoneCount, totalTodos }) {

    return (
        <div data-test="info-text">
            {
                totalTodos === 0 && (
                    <div>
                        <p> <em>Press 'Enter' to add task!</em> </p>
                    </div>
                )

            }
            {
                undoneCount !== 0 && (
                    <div>
                        <p> <em>{undoneCount} more tasks to finish! </em></p>
                        <hr />
                    </div>
                )

            }
            {
                totalTodos !== 0 && undoneCount == 0 && (
                    <div>
                        <h3>
                            <em>Well done ! <ThumbUpIcon /> <br />
                                You completed all your tasks </em>
                        </h3>
                        <hr />
                    </div>
                )
            }
        </div>
    )
}