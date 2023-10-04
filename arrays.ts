type CellValue = 'X' | 'O' | ''

type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
]

const gameBoard: GameBoard = [
    ['X', '', 'O'],
    ['X', 'O', ''],
    ['O', 'X', 'X']
]