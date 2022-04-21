export interface topcard {
    bgcolor: string,
    icon: string,
    title: string,
    subtitle: string
}

export const topcards: topcard[] = [

    {
        bgcolor: 'success',
        icon: 'bi bi-wallet',
        title: '25',
        subtitle: 'Operateurs'
    },
    {
        bgcolor: 'danger',
        icon: 'bi bi-coin',
        title: '200',
        subtitle: 'Operations'
    },
    {
        bgcolor: 'warning',
        icon: 'bi bi-basket3',
        title: '30',
        subtitle: 'Agents'
    },
    {
        bgcolor: 'info',
        icon: 'bi bi-bag',
        title: '50',
        subtitle: 'Techniciens'
    },

] 