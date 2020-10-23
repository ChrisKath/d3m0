// State
export const state: any = {
  load: [false, ''],
  lang: 'en-US',

  experiences: [
    {
      time: 'present',
      label: 'Front-End Web Developer',
      desc: 'Tempora praesentium architecto aut temporibus quam adipisci excepturi optio rem, id eaque dicta sed a, esse aspernatur eligendi repudiandae corporis hic nesciunt!'
    },
    {
      time: 'seb 2016 - dec 2016',
      label: 'Junior Back-End Programmer',
      desc: 'Tempora praesentium architecto aut temporibus quam adipisci excepturi optio rem, id eaque dicta sed a, esse aspernatur eligendi repudiandae corporis hic nesciunt!'
    },
    {
      time: 'jan 2016 - apr 2016',
      label: 'Internship Student',
      desc: 'Tempora praesentium architecto aut temporibus quam adipisci excepturi optio rem, id eaque dicta sed a, esse aspernatur eligendi repudiandae corporis hic nesciunt!'
    }
  ],

  skills: [
    { label: 'Web Performance', value: '75' },
    { label: 'TypeScript', value: '60' },
    { label: 'Vue JS', value: '90' },
    { label: 'Node JS', value: '70' },
    { label: 'Adobe XD', value: '40' },
    { label: 'Photoshop', value: '50' }
  ]
}

// Getters
export const getters: any = {
  load (state: any): any {
    return state.load
  },

  lang (state: any): string {
    return state.lang
  },

  experiences (state: any): any[] {
    return state.experiences
  },

  skills (state: any): any[] {
    return state.skills
  }
}

// Mutations
export const mutations: any = {
  SET_STATE (state: any, payload: any): void {
    state[payload.field] = payload.data
  }
}

// Actions
export const actions: any = {}