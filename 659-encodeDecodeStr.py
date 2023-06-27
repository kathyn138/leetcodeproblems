"""
659 · Encode and Decode Strings

Description
Design an algorithm to encode a list of strings to a string. The encoded string is then 
sent over the network and is decoded back to the original list of strings.

Please implement encode and decode


Example 1
Input: ["lint","code","love","you"]
Output: ["lint","code","love","you"]
Explanation:
One possible encode method is: "lint:;code:;love:;you"

Example 2
Input: ["we", "say", ":", "yes"]
Output: ["we", "say", ":", "yes"]
Explanation:
One possible encode method is: "we:;say:;:::;yes"
"""


class Solution:
    """
    @param: strs: a list of strings
    @return: encodes a list of strings to a single string.
    """
    def encode(self, strs):
        res = ''

        for s in strs: 
            # get length of s and convert to string
            res += str(len(s)) + "#" + s
        
        return res

    """
    @param: str: A string
    @return: decodes a single string to a list of strings
    """
    def decode(self, str):
        # i acts as beginning of word
        res, i = [], 0
        while i < len(str):
            j = i
            while str[j] != "#":
                j+= 1
            # j is where delimiter # is 
            length = int(str[i:j])
            # want j + 1 for ending to get past the delimiter in input str
            res.append(str[j + 1 : j + 1 + length])
            # i is beginning of next word / end of string
            i = j + 1 + length
        
        return res
