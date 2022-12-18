def encode(message, rails):
    fences = [""] * rails
    i = 0
    sign = 1
    for c in message:
        fences[i] += c
        val = i + sign 
        if val == -1 or val == rails:
            sign *= -1
        i += sign

    return "".join(fences)


def decode(encoded_message, rails):
    dist = 2 * rails - 2
    l = len(encoded_message)
    k = 0
    decode_message = [""] * l
    for i in range(rails):
        offset = dist - 2 * i 
        j = i
        for j in range(i, l, dist):
            if k < l: 
                decode_message[j] = encoded_message[k]
                k += 1
            if i != 0 and i != rails-1 and j+offset < l:
                decode_message[j+offset] = encoded_message[k]
                k += 1
        
    return "".join(decode_message)
