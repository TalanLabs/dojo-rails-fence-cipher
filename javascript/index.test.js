const {encode, decode} = require("./index");


describe('Rails Fence Cipher', function () {
    describe('It should encode', function () {
        it('test_encode_with_two_rails', function () {
            expect(encode("XOXOXOXOXOXOXOXOXO", 2))
                .toEqual("XXXXXXXXXOOOOOOOOO")
        })

        it('test_encode_with_three_rails', function () {
            expect(encode("WEAREDISCOVEREDFLEEATONCE", 3))
                .toEqual("WECRLTEERDSOEEFEAOCAIVDEN")
        })

        it('test_encode_with_ending_in_the_middle', function () {
            expect(encode("EXERCISES", 4))
                .toEqual("ESXIEECSR")
        })
    })
    describe('It should decode', function () {

        it('test_decode_with_three_rails', function () {
            expect(decode("TEITELHDVLSNHDTISEIIEA", 3))
                .toEqual("THEDEVILISINTHEDETAILS")
        })

        it('test_decode_with_five_rails', function () {
            expect(decode("EIEXMSMESAORIWSCE", 5))
                .toEqual("EXERCISMISAWESOME")
        })
        it('test_decode_with_six_rails', function () {
            expect(decode("133714114238148966225439541018335470986172518171757571896261", 6))
                .toEqual("112358132134558914423337761098715972584418167651094617711286")
        })
    })
});
