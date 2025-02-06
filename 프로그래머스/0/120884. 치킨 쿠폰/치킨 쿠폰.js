function solution(chicken) {
    let freeChicken = 0;
    let restCoupon = 0;
    
    while(chicken > 1){
        freeChicken += Math.floor(chicken / 10)
        restCoupon += chicken % 10
        chicken /= 10
    }
    
    if(restCoupon >= 10){
        freeChicken += Math.floor(restCoupon / 10)
    }
    
    return freeChicken
}