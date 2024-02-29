import {Component} from 'react'
import {
  MainContainer,
  MainHeading,
  Label1,
  Input1,
  GenerateButton,
  ImageContainer,
  ImageContainer1,
  Container1,
  SelectElement,
  Text,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    isValue: false,
    optionValue: '8',
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.setState({isValue: true})
  }

  getImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  getTopText = event => {
    this.setState({topText: event.target.value})
  }

  getBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  getOptionNum = event => {
    this.setState({optionValue: event.target.value})
  }

  render() {
    const {imageUrl, topText, bottomText, isValue, optionValue} = this.state
    console.log(optionValue)
    return (
      <MainContainer>
        <form onSubmit={this.onSubmitForm}>
          <MainHeading>Meme Generator</MainHeading>
          {isValue && (
            <ImageContainer1 isImage={imageUrl}>
              <Text size={optionValue}>{topText}</Text>
              <Text size={optionValue}>{bottomText}</Text>
            </ImageContainer1>
          )}
          <Container1>
            <Label1 htmlFor="input1">Image URL</Label1>
            <Input1
              value={imageUrl}
              onChange={this.getImageUrl}
              placeholder="Enter the Image URL"
              id="input1"
              type="text"
            />
          </Container1>
          <Container1>
            <Label1 htmlFor="input2">Top Text</Label1>
            <Input1
              value={topText}
              onChange={this.getTopText}
              placeholder="Enter the Top Text"
              id="input2"
              type="text"
            />
          </Container1>
          <Container1>
            <Label1 htmlFor="input3">Bottom Text</Label1>
            <Input1
              value={bottomText}
              onChange={this.getBottomText}
              placeholder="Enter the Bottom Text"
              id="input3"
              type="text"
            />
          </Container1>
          <Container1>
            <Label1 htmlFor="input4">Font Size</Label1>
            <SelectElement
              id="input4"
              value={optionValue}
              onChange={this.getOptionNum}
            >
              {fontSizesOptionsList.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </SelectElement>
          </Container1>
          <GenerateButton type="submit">Generate</GenerateButton>
        </form>
        {isValue && (
          <ImageContainer data-testid="meme" isImage={imageUrl}>
            <Text size={optionValue}>{topText}</Text>
            <Text size={optionValue}>{bottomText}</Text>
          </ImageContainer>
        )}
      </MainContainer>
    )
  }
}

export default MemeGenerator
