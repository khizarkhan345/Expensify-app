def Reverse(st, start, end):
    
    if start > end:
        return
    else:
        st[start], st[end] = st[end], st[start]
        Reverse(st, start+1, end-1)

str1 = "How are you Khushi"
str2 = str1.split(' ')
Reverse(str2, 0, len(str2)-1)
print(str2)