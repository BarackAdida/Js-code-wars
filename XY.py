def solution(S):
    n = len(S)
    
    # Step 1: Calculate total counts of 'x' and 'y' in the entire string S
    count_x = S.count('x')
    count_y = S.count('y')
    
    # Initialize the counter for valid splits
    valid_splits = 0
    
    # Step 2: Iterate through all possible splits of the string S
    left_x = 0
    left_y = 0
    
    for i in range(1, n):
        if S[i-1] == 'x':
            left_x += 1
        elif S[i-1] == 'y':
            left_y += 1
            
        right_x