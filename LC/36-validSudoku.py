class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        boxes = {
            '0-0': set(),
            '0-1': set(),
            '0-2': set(),
            '1-0': set(),
            '1-1': set(),
            '1-2': set(),
            '2-0': set(),
            '2-1': set(),
            '2-2': set()
        }

        for i in range(9):
            col = set()
            row = set()
            x = i // 3

            for j in range(9):
                curr_col_val = board[j][i]
                curr_row_val = board[i][j]
                y = j // 3
                currBox = f'{x}-{y}'

                if (curr_col_val in col) or (curr_row_val in row) or (curr_row_val in boxes[currBox]): return False
                if curr_col_val != '.':
                    col.add(curr_col_val)
                
                if curr_row_val != '.':
                    row.add(curr_row_val)
                    boxes[currBox].add(curr_row_val)

        return True