const API_KEY = "1e970c10c2393401e36ea4766048801e";

const requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:'',
    fetchLatest:`/latest?api_key=${API_KEY}&language=en-US`,
    fetchPopular:`/popular?api_key=${API_KEY}&language=en-US`



}

export default requests;