
const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();

const scanImageWithGoogleAPI = (imagePath) => {
    return new Promise(async (resolve, reject) => {
        const [result] = await client.documentTextDetection("../../uploads/test.jpg");
        if (!result) {
            reject("Result error !");
        }

        const detections = result.fullTextAnnotation;
        let dataReturn = [];
    
        detections.pages.forEach(page => {
            page.blocks.forEach(block => {
                block.paragraphs.forEach(paragraph => {
                    let symbols = [];
                    paragraph.words.forEach(word => {
                        symbols.push(word.symbols.map(symbol => { 
                            let text = symbol["text"];
                            if (symbol["property"] && symbol["property"]["detectedBreak"] && symbol["property"]["detectedBreak"]["type"]) {
                                if (symbol["property"]["detectedBreak"]["type"] == "SPACE") {
                                    text += " ";
                                }
                            }
                            return text;
                        }).join(""));
                    });
                    let data = {
                        text: symbols.join(""),
                        vertices: paragraph.boundingBox.vertices,
                    }
                    dataReturn.push(data);
    
                    console.log("symbols: " + symbols.join(""));
                    console.log(paragraph.boundingBox.vertices.map(v => JSON.stringify(v)));
                })
            });
        });

        resolve(dataReturn);
        
    });
}

module.exports = {
    scanImageWithGoogleAPI,
}

