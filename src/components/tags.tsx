import React from "react"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
import "./tags.scss"

const Tag = ({ tag }) => (
  <Link to={`/tags/${kebabCase(tag)}/`}>
    <li className="tag-li">{tag}</li>
  </Link>
)

const Tags = ({ tags }) => (
  <ul className="tag-ul">
    {(tags || []).map(tag => (
      <Tag key={tag} tag={tag} />
    ))}
  </ul>
)

export default Tags
