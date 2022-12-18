
module RailFenceCipher (encode, decode) where

import Data.List (sortOn)
import Data.Function (on)

fences :: Int -> [Int]
fences n = 0 : fences_ [0 .. n-1] where
    fences_ lst@(x:xs) = xs ++ (fences_ . reverse) lst

encode :: Int -> [a] -> [a]
encode rails message = zipSort message $ fences rails

decode :: Int -> [a] -> [a]
decode rails message = zipSort message $ encode rails [1 .. length message]

zipSort :: Ord b => [a] -> [b] -> [a]
zipSort message rails = map fst . sortOn snd $ zip message rails
