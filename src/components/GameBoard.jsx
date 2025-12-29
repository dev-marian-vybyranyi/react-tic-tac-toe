
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

const GameBoard = ({ onSelectSquare, turns }) => {
    let gameBoard = [...initialGameBoard.map(innerArray => [...innerArray])];

    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }


    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     onSelectSquare();
    // }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSimbol, colIndex) =>
                        <li key={colIndex}>
                            <button
                                onClick={() => onSelectSquare(rowIndex, colIndex)}
                            >
                                {playerSimbol}
                            </button>
                        </li>
                    )}
                </ol>
            </li>)}
        </ol>
    )
}

export default GameBoard