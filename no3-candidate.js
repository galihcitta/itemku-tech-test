function solution(relation) {
    var answer = 0;
    var unique = true;

    for (let i = 0; i < relation.length; i++) {
        for (let j = 0; j < relation.length; j++) {
            if (relation[i][0] === relation[j][0] && i !== j) {
                unique = false;
            }
        }
    }

    if (unique) { 
        answer++ 
    }

    unique = true;

    for (let i = 0; i < relation.length; i++) { 
        for (let j = 0; j < relation.length; j++) {
            let field1 = relation[i][1].concat(relation[i][2])
            let field2 = relation[j][1].concat(relation[j][2])
            if (field1 === field2 && i !== j) {
                unique = false;
            }
        }
    }
    if (unique) { 
        answer++ 
    }

    return answer;

}


// var relation = [['100','ryan','music','2'],
//             ['200','apeach','math','2'],
//             ['300','tube','computer','3'],
//             ['400','con','computer','4'],
//             ['500','muzi','music','3'],
//             ['600','apeach','music','2']];

// console.log(solution(relation));