//const gameBoard = document.querySelector('#board')
//const playerDisplay = document.querySelector('#player')
//const infoDisplay = document.querySelector('#info-display')
//const width = 8
//let playerGo = 'black'
//playerDisplay.textContent = ' black' 
//
//const startPieces = [
//  rook, knight, bishop, queen, king, bishop, knight, rook,
//  pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
//  '', '', '', '', '', '', '', '',
//  '', '', '', '', '', '', '', '',
//  '', '', '', '', '', '', '', '',
//  '', '', '', '', '', '', '', '',
//  pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
//  rook, knight, bishop, queen, king, bishop, knight, rook, 
//]
//
//const createBoard = () => {
//    startPieces.forEach((startPiece, i) => {
//        const square = document.createElement('div')
//        square.classList.add('square')
//        square.innerHTML = startPiece
//        square.firstChild?.setAttribute('draggable', 'true')  
//        
//        square.setAttribute('square-id', i)
//        const row = Math.floor((63 - i ) / width) + 1
//        if (row % 2 === 0) {
//            square.classList.add(i % 2 === 0 ? 'beige' : 'brown')
//        } else {
//            square.classList.add(i % 2 === 0 ? 'brown' : 'beige')
//        }
//        if ( i <= 15) {
//            square.firstChild.firstChild?.classList.add('black-piece')  
//        }
//        if ( i >= 48) {
//            square.firstChild.firstChild?.classList.add('white-piece')  
//        }
//
//
//        gameBoard.appendChild(square)
//    })
//}
//
//createBoard()
//
//const allSquares = document.querySelectorAll('.square')
//
//let startPositionId
//let draggedElement
//
//const dragStart = (e) => {
//  startPositionId = e.target.parentNode.getAttribute('square-id')
//  draggedElement = e.target
//  console.log('draggedElement', draggedElement)
//}
//
//const dragOver = (e) => {
//    e.preventDefault()
//}
//
//const changePlayer = () => {
//    //playerGo = playerGo === 'black' ? ' white' : ' black'
//    //playerDisplay.textContent = playerGo
//    //playerGo === 'black' ? revertIds() : reverseIds()
//    if (playerGo === 'black') {
//        playerGo = 'white'
//        playerDisplay.textContent = ' white'
//        reverseIds()
//    } else {
//        playerGo = 'black'
//        playerDisplay.textContent = ' black'
//        revertIds()
//    }
//}
//
//const checkIfValid = (target) => {
//    const squareTargetId = Number(target.getAttribute('square-id')) || Number(target.parentNode.getAttribute('square-id'))
//    const startId = Number(startPositionId)
//    const piece = draggedElement.id
//    console.log('squareTargetId', squareTargetId)
//    console.log('startId', startId)
//    console.log('piece', piece)
//
//    switch(piece) {
//        case 'pawn':
//            const starterRow = [8, 9, 10, 11, 12, 13, 14, 15]
//            if (
//                starterRow.includes(startId) && startId + width * 2 === squareTargetId ||
//                startId + width === squareTargetId || startId + width - 1 === squareTargetId && document.querySelector(`[square-id="${startId + width - 1}"]`).firstChild || 
//                startId + width + 1 === squareTargetId && document.querySelector(`[square-id="${startId + width + 1}"]`).firstChild
//            )
//                 {
//                return true
//            }
//            break;
//        case 'knight':
//            const startSquare5 = document.querySelector(`[square-id="${startId}"]`);
//            const targetSquare5 = document.querySelector(`[square-id="${squareTargetId}"]`);
//        
//            if (startSquare5 && targetSquare5) {
//                const rowDiff = Math.abs(Math.floor(targetSquare5.getAttribute('square-id') / width) - Math.floor(startSquare5.getAttribute('square-id') / width));
//                const colDiff = Math.abs(targetSquare5.getAttribute('square-id') % width - startSquare.getAttribute('square-id') % width);
//        
//                // El caballo se mueve en un patrón en forma de "L"
//                if ((rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2)) {
//                    return true; // El movimiento es válido
//                }
//            }
//            break;
//            case 'bishop':
//                const startSquare = document.querySelector(`[square-id="${startId}"]`);
//                const targetSquare = document.querySelector(`[square-id="${squareTargetId}"]`);
//            
//                if (startSquare && targetSquare) {
//                    const rowDiff = Math.floor(targetSquare.getAttribute('square-id') / width) - Math.floor(startSquare.getAttribute('square-id') / width);
//                    const colDiff = (targetSquare.getAttribute('square-id') % width) - (startSquare.getAttribute('square-id') % width);
//            
//                    if (Math.abs(rowDiff) === Math.abs(colDiff)) {
//                        const rowStep = rowDiff > 0 ? 1 : -1;
//                        const colStep = colDiff > 0 ? 1 : -1;
//                        let row = Math.floor(startSquare.getAttribute('square-id') / width) + rowStep;
//                        let col = startSquare.getAttribute('square-id') % width + colStep;
//            
//                        while (row !== Math.floor(targetSquare.getAttribute('square-id') / width)) {
//                            const square = document.querySelector(`[square-id="${row * width + col}"]`);
//                            if (square.firstChild && !square.firstChild.firstChild) {
//                                return false; 
//                            }
//                            row += rowStep;
//                            col += colStep;
//                        }
//            
//                        return true;
//                    }
//                }
//                break;
//            case 'rook':
//                const startSquare2 = document.querySelector(`[square-id="${startId}"]`);
//                const targetSquare2 = document.querySelector(`[square-id="${squareTargetId}"]`);
//            
//                if (startSquare2 && targetSquare2) {
//                    const rowDiff = Math.floor(targetSquare2.getAttribute('square-id') / width) - Math.floor(startSquare2.getAttribute('square-id') / width);
//                    const colDiff = (targetSquare2.getAttribute('square-id') % width) - (startSquare2.getAttribute('square-id') % width);
//            
//                    // La torre se mueve en líneas rectas horizontal o verticalmente
//                    if ((rowDiff === 0 && colDiff !== 0) || (colDiff === 0 && rowDiff !== 0)) {
//                        // Verifica si no hay piezas bloqueando el camino
//                        let rowStep = 0;
//                        let colStep = 0;
//            
//                        if (rowDiff !== 0) {
//                            rowStep = rowDiff > 0 ? 1 : -1;
//                        }
//            
//                        if (colDiff !== 0) {
//                            colStep = colDiff > 0 ? 1 : -1;
//                        }
//            
//                        let row = Math.floor(startSquare2.getAttribute('square-id') / width) + rowStep;
//                        let col = startSquare2.getAttribute('square-id') % width + colStep;
//            
//                        while (row !== Math.floor(targetSquare2.getAttribute('square-id') / width) || col !== targetSquare2.getAttribute('square-id') % width) {
//                            const square = document.querySelector(`[square-id="${row * width + col}"]`);
//                            if (square.firstChild) {
//                                return false; // Si hay una pieza en el camino, el movimiento no es válido
//                            }
//                            row += rowStep;
//                            col += colStep;
//                        }
//            
//                        return true; // El movimiento es válido
//                    }
//                }
//                break;
//            case 'queen':
//                const startSquare3 = document.querySelector(`[square-id="${startId}"]`);
//                const targetSquare3 = document.querySelector(`[square-id="${squareTargetId}"]`);
//            
//                if (startSquare3 && targetSquare3) {
//                    const rowDiff = Math.floor(targetSquare3.getAttribute('square-id') / width) - Math.floor(startSquare3.getAttribute('square-id') / width);
//                    const colDiff = (targetSquare3.getAttribute('square-id') % width) - (startSquare3.getAttribute('square-id') % width);
//            
//                    // La reina se mueve en líneas rectas horizontal, vertical o diagonales
//                    if ((rowDiff === 0 && colDiff !== 0) || (colDiff === 0 && rowDiff !== 0) || Math.abs(rowDiff) === Math.abs(colDiff)) {
//                        // Verifica si no hay piezas bloqueando el camino
//                        let rowStep = 0;
//                        let colStep = 0;
//            
//                        if (rowDiff !== 0) {
//                            rowStep = rowDiff > 0 ? 1 : -1;
//                        }
//            
//                        if (colDiff !== 0) {
//                            colStep = colDiff > 0 ? 1 : -1;
//                        }
//            
//                        let row = Math.floor(startSquare3.getAttribute('square-id') / width) + rowStep;
//                        let col = startSquare3.getAttribute('square-id') % width + colStep;
//            
//                        while (row !== Math.floor(targetSquare3.getAttribute('square-id') / width) || col !== targetSquare3.getAttribute('square-id') % width) {
//                            const square = document.querySelector(`[square-id="${row * width + col}"]`);
//                            if (square.firstChild) {
//                                return false; // Si hay una pieza en el camino, el movimiento no es válido
//                            }
//                            row += rowStep;
//                            col += colStep;
//                        }
//            
//                        return true; // El movimiento es válido
//                    }
//                }
//                break;
//            case 'king':
//                const startSquare4 = document.querySelector(`[square-id="${startId}"]`);
//                const targetSquare4 = document.querySelector(`[square-id="${squareTargetId}"]`);
//            
//                if (startSquare4 && targetSquare4) {
//                    const rowDiff = Math.floor(targetSquare4.getAttribute('square-id') / width) - Math.floor(startSquare4.getAttribute('square-id') / width);
//                    const colDiff = (targetSquare4.getAttribute('square-id') % width) - (startSquare4.getAttribute('square-id') % width);
//            
//                    // El rey puede moverse en cualquier dirección, pero solo una casilla a la vez
//                    if ((Math.abs(rowDiff) <= 1) && (Math.abs(colDiff) <= 1)) {
//                        return true; // El movimiento es válido
//                    }
//                }
//                break;
//}
//}
//
//const checkForWin = () => {
//    const kings = Array.from(document.querySelectorAll('#king'))
//    console.log('kings', kings)
//    if (kings.some(king => king.firstChild.classList.contains('black-white'))) {
//        infoDisplay.textContent = 'Black wins'
//        const allSquares = document.querySelectorAll('.square')
//        allSquares.forEach(square => square.firstChild?.setAttribute('draggable', 'false'))
//    }
//    if (kings.some(king => king.firstChild.classList.contains('white-black'))) {
//        infoDisplay.textContent = 'White wins'
//        const allSquares = document.querySelectorAll('.square')
//        allSquares.forEach(square => square.firstChild?.setAttribute('draggable', 'false'))
//    }
//}
//
//const dragDrop = (e) => {
//    e.stopPropagation()
//    console.log('playerGo', playerGo)
//    console.log('e.target', e.target)
//    e.target.firstChild?.classList.add(playerGo)
//    const correctGo = draggedElement.firstChild?.classList.contains('black-piece') || 
//    draggedElement.firstChild?.classList.contains('white-piece');
//    const taken = e.target.classList.contains('piece')
//    const valid  = checkIfValid(e.target)
//    const opponentGo = playerGo === 'black' ? 'white-piece' : 'black-piece'
//    console.log('opponentGo', opponentGo)
//    const takenByOpponent = e.target.firstChild?.classList.contains(opponentGo)
//
//    if (correctGo) {
//        if (takenByOpponent && valid) {
//            e.target.parentNode.append(draggedElement)
//            e.target.remove()
//            checkForWin()
//            changePlayer()
//            return
//        }
//        if (taken && !takenByOpponent) {
//            infoDisplay.textContent = 'Invalid move, please try again'
//            setTimeout(() => {
//                infoDisplay.textContent = ''
//            }, 2000)
//            return
//        }
//        if(valid) {
//            e.target.append(draggedElement)
//            checkForWin()
//            changePlayer()
//            return
//        }
//    }
//}
//
//const reverseIds = () => {
//    const allSquares = document.querySelectorAll('.square')
//    allSquares.forEach((square, i) => {
//        square.setAttribute('square-id', (width * width - 1) - i)
//    })
//}
//
//const revertIds = () => {
//    const allSquares = document.querySelectorAll('.square')
//    allSquares.forEach((square, i) => {
//        square.setAttribute('square-id', i)
//    })
//}
//
//allSquares.forEach(square => {
//    square.addEventListener('dragstart', dragStart)
//    square.addEventListener('dragover', dragOver)
//    square.addEventListener('drop', dragDrop)
//})
