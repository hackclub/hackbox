import { Styled } from 'theme-ui'
import {
  TypeScale,
  TypeStyle,
  ColorPalette,
  ColorSwatch,
} from '@theme-ui/style-guide'
export default () => (
  <>
    <Styled.h1>Styled Guide</Styled.h1>
    <ColorPalette />
    <ColorSwatch />
    <TypeScale />
    <TypeStyle fontFamily='heading' fontWeight='heading' lineHeight='heading' />
    <TypeStyle fontFamily='body' fontWeight='body' lineHeight='body' />
  </>
)
