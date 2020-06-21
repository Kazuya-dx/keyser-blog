import React from "react"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
import "./tags.scss"

const Tag = ({ tag, tags, index }) => (
  <>
    <Link to={`/tags/${kebabCase(tag)}/`}>
      <li className="tag-li">{tag}</li>
    </Link>
    {tags.length > 1 && index !== tags.length - 1 ? (
      <div className="tag-space">/</div>
    ) : (
      <></>
    )}
  </>
)

const Tags = ({ tags }) => (
  <ul className="tag-ul">
    {(tags || []).map((tag, index) => (
      <Tag key={tag} tag={tag} tags={tags} index={index} />
    ))}
  </ul>
)

export default Tags
