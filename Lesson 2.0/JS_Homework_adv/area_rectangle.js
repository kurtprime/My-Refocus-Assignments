function areaOfRectangle (length,width){
    let area = length*width
    if (area <=0 ) {
        return console.log("The variable should be positive")
    }

    console.log("Length:"+length);
    console.log("width:"+width);
    console.log("Area:"+area);
    return
}
areaOfRectangle(20,16);
