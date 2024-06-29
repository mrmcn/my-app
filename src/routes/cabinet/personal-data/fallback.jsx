import MyAccordion from './common/my-accordion'

export default function FallBack() {
  return (
    <>
      <MyAccordion label='Personal data...'></MyAccordion>
      <MyAccordion label='Contacts...'></MyAccordion>
      <MyAccordion label='Delivery address...'></MyAccordion>
      <MyAccordion label='Login & password...'></MyAccordion>
      <MyAccordion label='Delete account...'></MyAccordion>
    </>
  )
}
