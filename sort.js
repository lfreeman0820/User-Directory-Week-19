const arr = [123,53235,234,36,12312,5,325,234,235253,2432,53253,32521,21245,2352,352345,124,235,2352,341,534,63,4634,235,2346,352,35,2346,234636];
const arr2 = ["slkdfgh", "zxcbv", "adsgfe3", "xahskdjfh", "asewe", "zxcvbjwe", "zxcerwe", "wetwqwer", "xzsafasf", "xzsafasfa"];

console.log(arr2.sort((a,b)=> {
    if(a<b){
        return 1
    }else if(a>b){
        return -1
    }else{
        return 0
    }
}))
