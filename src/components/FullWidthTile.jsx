import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { LuFigma } from 'react-icons/lu'
import { SiTrello } from 'react-icons/si'
import { BiSolidBookAlt } from 'react-icons/bi'
import styled from 'styled-components'

const StyledFullWidthTile = styled.div`
  width: 100%;
  background-color: var(--white);
  min-height: 11.4375rem;
  box-shadow: 0rem 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  width: 100%;
  padding: 2rem 3rem;

  h4 {
    text-align: center;
  }

  .tile-icon {
    height: 1.5rem;
    width: 1.5rem;
  }

  .tile-body {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  p {
    max-width: 24.375rem;
  }

  .project-links {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    a {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      font-size: 1rem;
      color: var(--black);
      text-decoration: none;
      border: 0.0625rem solid var(--black);
      border-radius: 2rem;
      padding: 0.25rem 0.5rem;
      transition: all 0.2s ease-in-out;
      &:hover {
        background-color: var(--black);
        color: var(--white);
      }
    }
  }
`

const FullWidthTile = ({
  icon,
  title,
  description,
  btnText,
  linkUrl,
  projectLinks,
}) => {
  const projectLinkIcons = {
    github: <FiGithub />,
    figma: <LuFigma />,
    trello: <SiTrello />,
    other: <BiSolidBookAlt />,
  }

  console.log(projectLinks)

  return (
    <StyledFullWidthTile>
      {icon && <img className="tile-icon" src={icon} alt={title} />}
      <div className="tile-body">
        {title && <h4 className="heading-3">{title}</h4>}
        {description && <p className="p2-body">{description}</p>}
        {projectLinks && (
          <div className="project-links">
            {projectLinks.map((link) => (
              <a
                key={link.link}
                href={link.link}
                target="_blank"
                rel="noreferrer"
              >
                {projectLinkIcons[link.linkType]} {link.linkType}
              </a>
            ))}
          </div>
        )}
      </div>
    </StyledFullWidthTile>
  )
}
export default FullWidthTile
