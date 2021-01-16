import styled from 'styled-components';

const TestimonialStyled = styled.div`
  margin: 0 15px;
`;

const TestimonialContent = styled.div`
  min-height: 150px;
  display: flex;
  align-items: center;
  padding: 30px;
  margin-bottom: 35px;
  position: relative;
  border-left: 5px solid #2e344e;
  background: #191d2b;
  &:after {
    content: '';
    position: absolute;
    left: 30px;
    top: 100%;
    border-color: #191d2b transparent transparent #191d2b;
    border-style: solid;
    border-width: 12px;
  }
  p {
    margin-bottom: 0;
    font-size: 1.2rem;
  }
`;

const TestimonialAuthor = styled.div`
  h5 {
    margin-bottom: 0;
  }

  h6 {
    margin-bottom: 0;
    color: #a4acc4;
  }
`;

type ServiceProps = {
  children: string;
  author: string;
  company: string;
};
export function Testimonial({ author, children, company }: ServiceProps) {
  return (
    <TestimonialStyled>
      <TestimonialContent>
        <p>{children}</p>
      </TestimonialContent>
      <TestimonialAuthor>
        <h5>{author}</h5>
        <h6>{company}</h6>
      </TestimonialAuthor>
    </TestimonialStyled>
  );
}

export default Testimonial;
