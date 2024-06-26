export const routes = {
  default: '/',
  client: {
    orders: '',
    order: (orderID?: number | string) => `${routes.client.orders}/${orderID ?? ':orderID'}`,
    feedback: (orderID?: number | string) => `${routes.client.order(orderID)}/feedback`
  },
  clientRepresentative: {
    orders: '',
    feedback: (orderID?: number | string) => `${routes.clientRepresentative.orders}/${orderID ?? ':orderID'}`
  },
  brigadier: {
    orders: 'orders',
    questionnaires: '',
    questionnaire: (questionnaireID?: number | string) => `${routes.brigadier.questionnaires}/${questionnaireID ?? ':questionnaireID'}`
  },
  controller: {
    feedbackList: '',
    feedback: (orderID?: number | string) => `${routes.controller.feedbackList}/${orderID ?? ':orderID'}`,
  },
  agent: {
    orders: '',
    order: (orderID?: number | string) => `${routes.agent.orders}/${orderID ?? ':orderID'}`,
  },
  technologist: {
    questionnaires: '',
    questionnaire: (questionnaireID?: number | string) => `${routes.technologist.questionnaires}/${questionnaireID ?? ':questionnaireID'}`
  },
  courier: {
    orders: ''
  }
}

