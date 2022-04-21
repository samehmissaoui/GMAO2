export interface Feed {
    class: string,
    icon: string,
    task: string,
    time: string
}

export const Feeds: Feed[] = [

    {
        class: 'bg-info',
        icon: 'bi bi-bell',
        task: '2 interventions OK.',
        time: 'Just Now'
    },
    {
        class: 'bg-success',
        icon: 'bi bi-hdd',
        task: '4 interventions Postproduct.',
        time: '2 Hours ago'
    },
    {
        class: 'bg-warning',
        icon: 'bi bi-bag-check',
        task: '3 RDV confirmé.',
        time: '31 May'
    },
    {
        class: 'bg-danger',
        icon: 'bi bi-person',
        task: '2 interventions NOK.',
        time: '30 May'
    },
    {
        class: 'bg-primary',
        icon: 'bi bi-person',
        task: '5 interventions en en cours.',
        time: '21 May'
    },

] 