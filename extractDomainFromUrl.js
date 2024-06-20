function extractDomainFromUrl(url) {

    if (url.includes('http://') || url.includes('https://')) {
        let splited = url.split('//')[1];
        if (splited.startsWith('www')) {
            let domain = splited.split('.')[1]
            return domain
        } else {
            let domain = splited.split('.')[0]
            return domain
        }
    }

    if (url.includes('www.')) {
        if (url.startsWith('www.')) {
            return url.split('.')[1]
        } else {
            return url.split('.')[0]
        }
    }
}

let result = extractDomainFromUrl('www.google.ca')
console.log(result)
