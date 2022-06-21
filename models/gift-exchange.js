class giftExchange {
    static pairs(names) {
        let size = names.length;
        let groups = [];
        let i = 0;
        let random = 0.5 - Math.random();
        if (size % 2 != 0) {
            throw new BadRequestError("Number of names cant be odd");
        }

        let random1 = names.slice();
        let random2 = names.slice();

        random1.sort(function() {
            return random;
        });
        random2.sort(function() {
            return random;
        });

        while (groups.length != size / 2) {
            let name1 = random1.pop();
            let name2 = random2[0] == name1 ? random2.pop() : random2.shift();

            groups[i] = [name1, name2];
            i++;
        }

        return groups;
    }

    static traditional(names) {
        let size = names.length;
        let givee = names[0];
        let random;
        let groups = [];
        let used = [];

        used.push(givee);

        while (true) {
            random = Math.floor(Math.random() * size);

            if (used.length == size) {
                groups.push(givee + " is giving a gift to " + names[0]);
                break;
            }

            if (random == givee || used.includes(names[random])) {
                continue;
            }

            groups.push(givee + " is giving a gift to " + names[random]);

            used.push(names[random]);
            givee = names[random];
        }

        return groups;
    }
}

module.exports = giftExchange;