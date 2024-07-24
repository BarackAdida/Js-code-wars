def solution(N):
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    full_cycles = N // 26
    remaining_chars = N % 26
    
    result = alphabet * full_cycles + alphabet[:remaining_chars]
    
    return result

# Examples to illustrate:
print(solution(3))    # Example output: "abc"
print(solution(5))    # Example output: "abcde"
print(solution(30))   # Example output: "abcdefghijklmnopqrstuvwxyzabcd"