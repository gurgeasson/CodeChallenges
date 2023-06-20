# brief
# You are going to be given a word. Your job is to return the middle character of the word.
# If the word's length is odd, return the middle character.
# If the word's length is even, return the middle 2 characters.
# Input: A word (string) of length 0 < str < 1000
# Output: The middle character(s) of the word represented as a string.

# assumptions
# 
# for future releases
# test if string length is between 1 and 1000, else return error

def get_middle(s):
    # pseudocode:
        # take 's' and count characters - put it into numb_of_chars.
        # modulus by two.
        # if result 0, take the numb_of_chars/2-1 and the numb_of_chars/2 character, concatenate and return them.
        # else take numb_of_chars/2'th and return it.
    numb_of_chars = len(s) # count number of characters in string
    if numb_of_chars % 2 == 0: # check if lenght is even
        # print('even')
        middle_char = s[int(numb_of_chars/2-1)] + s[int(numb_of_chars/2)] # find the characters and return
        return(middle_char)
    else: # if not even, it means it's odd - though it won't catch zero... keep that in mind for future releases
        # print('odd') # 
        middle_char = s[int(numb_of_chars/2)] # find the character and return
        return(middle_char)

# my favourite solution from others:
#   def get_middle(s):
#     index, odd = divmod(len(s), 2)
#     return s[index] if odd else s[index - 1:index + 1]
