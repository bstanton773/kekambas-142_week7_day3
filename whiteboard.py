# Substitute two equal letters by the next letter of the alphabet (two letters convert to one):

# "aa" => "b", "bb" => "c", .. "zz" => "a".
# The equal letters do not have to be adjacent.
# Repeat this operation until there are no possible substitutions left.
# Return a string.

# Example:

# let str = "zzzab"
#     str = "azab"
#     str = "bzb"
#     str = "cz"
# return "cz"
# Notes
# The order of letters in the result is not important.
# The letters "zz" transform into "a".
# There will only be lowercase letters.
# our returned string is expecteded to be in alaphabetical order

def solution(string):
    letters = sorted(string)
    made_change = True
    while made_change:
        letters = sorted(letters)
        made_change = False
        for i in range(len(letters) - 1):
            if letters[i] == letters[i+1]:
                new_letter = chr(ord(letters[i]) + 1)
                if new_letter == '{':
                    new_letter = 'a'
                letters = letters[:i] + [new_letter] + letters[i+2:]
                made_change = True
                break

    return ''.join(letters)

print(solution("abcabcba"))