interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const kri: Admin = { dbId: 22, email: "kri@gmail.com", userId: 2211,
role: "admin",
githubToken: "github",
startTrail: () => {
    return "trail started"
},
getCoupon: (name: "kriyadav", off: 10) => {
    return 10
}
}
kri.email = "kri@gmail.com"
// kri.dbId = 33

export{}