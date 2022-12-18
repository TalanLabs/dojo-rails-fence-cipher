package railfence

import "strings"

func Encode(message string, rails int) string {
	fences := make([]string, rails)
	i, sign := 0, 1

	for _, c := range message {
		fences[i] += string(c)
		if val := i + sign; val == -1 || val == rails {
			sign *= -1
		}
		i += sign
	}

	return strings.Join(fences, "")
}

func Decode(message string, rails int) string {
	dist := 2*rails - 2
	k, l := 0, len(message)
	decode_message := make([]byte, l)

	for i := 0; i < rails; i++ {
		offset := dist - 2*i // offset of next char
		for j := i; j < l; j += dist {
			if k < l { // add a new letter every "post"
				decode_message[j] = message[k]
				k++
			}
			if i != 0 && i != rails-1 && j+offset < l { // add a second letter if on diag
				decode_message[j+offset] = message[k]
				k++
			}
		}

	}
	return string(decode_message)
}
