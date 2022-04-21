export interface Product {
    image: string,
    uname: string,
    gmail: string,
    productName: string,
    status: string,
    weeks: number,
    budget: string
}

export const TopSelling: Product[] = [

    {
        image: 'assets/images/users/user1.jpg',
        uname: 'mohamed',
        gmail: 'hgover@gmail.com',
        productName: 'ooredoo',
        status: 'danger',
        weeks: 35,
        budget: '95K'
    },
    {
        image: 'assets/images/users/user2.jpg',
        uname: 'jamil ',
        gmail: 'hgover@gmail.com',
        productName: 'orange',
        status: 'info',
        weeks: 35,
        budget: '95K'
    },
    {
        image: 'assets/images/users/user3.jpg',
        uname: 'nasser',
        gmail: 'hgover@gmail.com',
        productName: 'orange	',
        status: 'warning',
        weeks: 35,
        budget: '95K'
    },
    {
        image: 'assets/images/users/user4.jpg',
        uname: 'maha',
        gmail: 'hgover@gmail.com',
        productName: 'orange',
        status: 'success',
        weeks: 35,
        budget: '95K'
    },

]