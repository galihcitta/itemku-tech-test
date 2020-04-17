 const stage = 5
 const x = [2,1,2,6,2,4,3,3]
 const x1 = [4,4,4,4,4]
// const output = [3,4,2,1,5]

function solution(N, users) {
    let answer = []
    let listOfFailure = []
    let currentUser = users.length
    let max = -1

    for (let stage=1;stage<=N;stage++) {
        let userOnStage = users.filter(user => user === stage).length
        listOfFailure[stage] = [stage, userOnStage !== 0 ? userOnStage / currentUser : 0]
        currentUser = currentUser - userOnStage
        max = listOfFailure[stage] > max ? listOfFailure[stage] : max
    }

    listOfFailure.sort((a, b) => a[1] <= b[1] ? 1 : -1)

    for (let stage=0; stage<N; stage++) {
        answer.push(listOfFailure[stage][0])
    }
    return answer
}

console.log(solution(stage, x))