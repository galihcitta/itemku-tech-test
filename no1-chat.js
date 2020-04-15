const input = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]

//const expectedResult = ["Prodo came in.", "Ryan came in.", "Prodo has left.", "Prodo came in."]

function solution(record) {
    let answer = []
    let history = []
    let user = {}

    for (let i=0; i<record.length; i++) {
        let splitRecord = record[i].split(' ')
        let activity = splitRecord[0]
        let id = splitRecord[1]
        let name = splitRecord[2]

        switch (activity) {
            case 'Enter':
                history.push([id, 'came in.'])
                user[id] = {
                    uname: name,
                    state: true
                }
                break
            case 'Leave':
                if (user[id]) {
                    history.push([id, 'has left.'])
                }
                user[id].state = false
                break
            case 'Change':
                if (user[id] && user[id].state) {
                    user[id].uname = name
                }
                break
            default:
                break
        }
    }

    for (let h of history) {
        let id = h[0]
        h[0] = user[id].uname
        answer.push(h.join(' '))
    }
    return answer
}

console.log(solution(input))
 


