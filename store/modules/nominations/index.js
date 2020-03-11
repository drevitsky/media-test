import * as TYPES from './types'

const namespaced = true

const state = () => ({
  activeId: null,
  list: [
    {
      id: 4,
      title: 'Воздух свободы',
      count: 0,
      desc:
        '«Воздух свободы» – правозащитные и политические инициативы, борьба с коррупцией, ущемлением гражданских свобод и т.п.',
      img: '/img/nominations/1.png',
      expert:
        'Елена ПАНФИЛОВА, директор центра антикоррупционных исследований и инициатив «Трансперенси Интернешнл»'
    },
    {
      id: 3,
      title: 'Духовное наследие',
      count: 0,
      desc:
        '«Духовное наследие» – инициативы в сфере образования, науки, культуры, искусства, просвещения, духовного развития личности.',
      img: '/img/nominations/2.png',
      expert:
        'Александр АРХАНГЕЛЬСКИЙ, литературовед, писатель, публицист, телеведущий, колумнист РИА "Новости", ординарный профессор факультета медиакоммуникаций ГУ ВШЭ'
    },
    {
      id: 8,
      title: 'Здоровье нации',
      count: 0,
      desc:
        '«Здоровье нации» – гражданские инициативы в сфере профилактики и охраны здоровья граждан, а также пропаганды здорового образа жизни.',
      img: '/img/nominations/3.png',
      expert:
        'Елена ШАТАЛОВА, председатель Общероссийского движения «За здоровую Россию»'
    },
    {
      id: 5,
      title: 'Зеленая планета',
      count: 0,
      desc:
        '«Зеленая планета» – гражданские инициативы в области охраны окружающей природной среды и защиты животных.',
      img: '/img/nominations/4.png',
      expert:
        'Игорь ЧЕСТИН, директор российского представительства Всемирного фонда дикой природы (WWF)'
    },
    {
      id: 12,
      title: 'Наш общий дом – Россия',
      count: 0,
      desc:
        '«Наш общий дом – Россия» – гражданские инициативы в оказании помощи пострадавшим в результате национальных, религиозных конфликтов, беженцам и вынужденным переселенцам, мигрантам, при нарушении прав национальных меньшинств.',
      img: '/img/nominations/5.png',
      expert: ''
    },
    {
      id: 2,
      title: 'Память',
      count: 0,
      desc:
        '«Память» – инициативы по оказанию помощи ветеранам Великой Отечественной войны, жертвам политических репрессий и членам их семей, участникам военных конфликтов, пожилым людям, благоустройству военно-мемориальных объектов и мест частных захоронений, а также  проекты связанные с воспитанием патриотизма.',
      img: '/img/nominations/6.png',
      expert:
        'Елена ЖЕМКОВА, член правления Международного историко-просветительского, благотворительного и правозащитного общества «Мемориал»'
    },
    {
      id: 10,
      title: 'Раздвинь границы',
      count: 0,
      desc:
        '«Раздвинь границы возможностей» – социальная поддержка и защита инвалидов, лиц с ограниченными возможностями, детей-сирот, выпускников детских домов, которые в силу своих физических или интеллектуальных особенностей, иных обстоятельств не способны самостоятельно реализовать свои права и законные интересы',
      img: '/img/nominations/7.png',
      expert:
        'Роза ДЕНИС, руководитель Региональной общественной организации людей с инвалидностью «Перспектива»'
    },
    {
      id: 1,
      title: 'Ростки новой власти',
      count: 0,
      desc:
        '«Ростки новой власти» – гражданские инициативы в области местного самоуправления, участия в муниципальных выборах, взаимодействия  с органами власти, организации «Школ новой власти», школ «Волонтёры муниципального развития», решения вопросов ЖКХ и т.п.',
      img: '/img/nominations/8.png',
      expert:
        'Андрей МАКСИМОВ, советник Фонда Кудрина по поддержке гражданских инициатив, доцент ВШЭ'
    },
    {
      id: 6,
      title: 'Семья будущего',
      count: 0,
      desc:
        '«Семья будущего» – инициативы по укреплению престижа и роли семьи в обществе, защите материнства, детства и отцовства.',
      img: '/img/nominations/9.png',
      expert: 'Оксана КУЧМАЕВА, профессор НИУ ВШЭ, факультет экономических наук'
    },
    {
      id: 7,
      title: 'Сохрани жизнь',
      count: 0,
      desc:
        '«Сохрани жизнь» – гражданские инициативы в организации помощи больным.',
      img: '/img/nominations/10.png',
      expert:
        'Александр САВЕРСКИЙ, президент Общероссийской общественной организации «Лига защитников пациентов»'
    },
    {
      id: 9,
      title: 'Чужого горя не бывает',
      count: 0,
      desc:
        '«Чужого горя не бывает» – гражданские инициативы в помощь бездомным, наркозависимым, заключенным, безработным, беспризорникам и т.п. А также действия волонтеров в оказании помощи пострадавшим в результате стихийных бедствий, экологических, промышленных или иных катастроф, в поиске пропавших.',
      img: '/img/nominations/11.png',
      expert:
        'Наталья Авилова, руководитель Программы «Помощь детям, пострадавшим в результате военных действий и катастроф» МБОО «Справедливая помощь Доктора Лизы»'
    }
  ]
})

const actions = {
  setActiveId(ctx, payload) {
    ctx.commit('setActiveId', payload)
  },

  async getNominations({ commit }, data) {
    try {
      const response = await this.$axios.get('/categories')
      const result = response.data
      // console.log('result', result)
      commit(TYPES.SET_NOMINATIONS, result)

      return result
    } catch (e) {
      return e
    }
  }
}

const mutations = {
  setActiveId(state, payload) {
    state.activeId = payload
  },

  [TYPES.SET_NOMINATIONS](state, payload) {
    state.list.forEach((item, i) => {
      const category = payload.find((cat, c) => {
        return +cat.id === +item.id
      })
      item.count = category.initiatives.length
    })
  }
}

const getters = {
  getNominations(state) {
    return state.list || []
  },
  getSingleNomination: (state, i) => (id) => {
    return state.list.find((item, i) => item.id === id)
  }
}

export default {
  namespaced,
  actions,
  state,
  mutations,
  getters
}
