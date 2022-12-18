pub struct RailFence {
    rails: u32
}

impl RailFence {
    pub fn new(rails: u32) -> RailFence {
        Self { rails }
    }

    pub fn encode(&self, text: &str) -> String {

        let indexed_text : Vec<(char, u32)> = 
            text.chars().zip(self.fence()).collect();

        (0..self.rails).map(|rail| {
            indexed_text.iter().filter(|(_, i)|*i == rail).map(|(c, _)|  c ).collect::<String>()
        })
        .fold(String::new(), |acc, s| acc + &s)
    }

    pub fn decode(&self, cipher: &str) -> String {
        let mut indexes : Vec<_>  = self.fence().zip(1..).take(cipher.len()).collect();
        indexes.sort();

        let mut indexed_text : Vec<_>  = cipher.chars().zip(indexes).map(|(c, (_, i))| (i, c)).collect();
        indexed_text.sort();

        indexed_text.iter().map(|(_, c)| c ).collect::<String>()
    }

    fn fence(&self) -> impl Iterator<Item = u32> {
        (0..(self.rails - 1)).chain((1..self.rails).rev()).cycle()
    }

}
