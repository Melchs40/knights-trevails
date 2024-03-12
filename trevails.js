// class Node {
//   constructor([x, y]) {
//     this.x = x;
//     this.y = y;
//   }

//   a() {
//     this.x = this.x - 1;
//     this.y = this.y - 2;
//     return this;
//   }
//   b() {
//     this.x = this.x - 2;
//     this.y = this.y - 1;
//     return this;
//   }
//   c() {
//     this.x = this.x - 2;
//     this.y = this.y + 1;
//     return this;
//   }
//   d() {
//     this.x = this.x - 1;
//     this.y = this.y + 2;
//     return this;
//   }
//   e() {
//     this.x = this.x + 1;
//     this.y = this.y + 2;
//     return this;
//   }
//   f() {
//     this.x = this.x + 2;
//     this.y = this.y + 1;
//     return this;
//   }
//   g() {
//     this.x = this.x + 2;
//     this.y = this.y - 1;
//     return this;
//   }
//   h() {
//     this.x = this.x + 1;
//     this.y = this.y - 2;
//     return this;
//   }
// }

function knightMoves([x, y], [solveX, solveY]) {
  let board = 8;
  let queue = [[x, y, 0, `[${x}, ${y}]`]];
  if (x == solveX && y == solveY) {
    return 'You are already at this location';
  }

  let moves = [
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
  ];

  let visited = [];

  for (let i = 0; i < board; i++) {
    for (let j = 0; j < board; j++) {
      visited.push([i, j, false]);
    }
  }

  let queueOpen = true;

  while (queue.length > 0) {
    let active = queue[0];
    queue.shift();

    moves.forEach((move) => {
      let findMove = [
        active[0] + move[0],
        active[1] + move[1],
        active[2] + 1,
        `${active[3]} --> [${active[0] + move[0]}, ${active[1] + move[1]}]`,
      ];

      if (
        findMove[0] >= 0 &&
        findMove[0] < board &&
        findMove[1] >= 0 &&
        findMove[1] < board
        // !visited[findMove[0]][findMove[1]]
      ) {
        // visited[findMove[0]][findMove[1]] = true;
        if (findMove[0] == solveX && findMove[1] == solveY) {
          queueOpen = false;
          console.log(
            `It took ${findMove[2]} move(s) to get there, the path was ${findMove[3]}`
          );
          return;
        } else if (queueOpen == true) {
          queue.push(findMove);
        } else {
          return;
        }
      }
    });
  }
}

knightMoves([1, 2], [2, 0]);
