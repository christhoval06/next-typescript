import styled from 'styled-components';

const ServiceStyled = styled.div`
  border: 1px solid #2e344e;
  border-top: 5px solid #2e344e;
  padding: 30px;
  background: #191d2b;
  transition: all 0.4s ease-out;
  &:hover {
    border-top-color: #037fff;
  }
  p {
    margin-bottom: 0;
  }
`;

const ServiceIcon = styled.span`
  margin-bottom: 20px;
  display: inline-block;
  color: #037fff;
  font-size: 2.5rem;
`;

const ServiceTitle = styled.h5`
  font-weight: 600;
  position: relative;
  padding-bottom: 15px;
  margin-bottom: 15px;
  font-size: 1.43rem;
  line-height: 2.14rem;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: auto;
    bottom: 0;
    height: 2px;
    width: 50px;
    background: #2e344e;
  }
`;

type ServiceProps = {
  children: string;
  title: string;
};
export function Service({ title, children }: ServiceProps) {
  return (
    <ServiceStyled>
      <ServiceIcon>
        <i className='lni-color-pallet size-md ' />
      </ServiceIcon>
      <ServiceTitle>{title}</ServiceTitle>
      <p>{children}</p>
    </ServiceStyled>
  );
}

export default Service;
