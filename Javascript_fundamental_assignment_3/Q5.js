function deliverytimeEstimator(deliveryType){
    switch (deliveryType) {
        case "standard":
            console.log("3-5 Days");
            break;
        case "express":
            console.log("1-2 days");
            break;
        case "overnight":
            console.log("overnight");
            break
        default:
            console.log("invalid delivery type");
            break;
    }
}

deliverytimeEstimator("standard")
deliverytimeEstimator("express")
deliverytimeEstimator("overnight")
deliverytimeEstimator("speedpost")